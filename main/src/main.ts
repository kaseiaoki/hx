
let output_text :string = "";
let index :number = 1;
class text_write {
  output_text: string;
  text_index: number;
  constructor(inputs: string) {
     this.output_text = inputs+"\r";
   }
   output() {
    console.log(this.output_text);
  }
}
enum hx{
    h2,
    h3,
    h4,
    h5
}

const hxs :Array<string>= ["\\．","\\((\\d+)\\)","[①-⑩]+","・+"];
class EventName {
    static LOAD:string = "load";
    static CLICK:string = "click";
    static MOUSE_MOVE:string = "mousemove";
}
function add_tags(splited:Array<string>){
  let add_tag_text : string;
  splited.forEach(text => {
      if(text.match(hxs[hx.h2])!=null){
        add_tag_text +="<h2>"+text+"</h2>";
      }else if(text.match(hxs[hx.h3])!=null){
        add_tag_text +="<h3>"+text+"</h3>";
      }else if(text.match(hxs[hx.h4])!=null){
        add_tag_text +="<h4>"+text+"</h4>";
      }else{
        add_tag_text +=text+"\r";
      }
      // }else if(text.match(hxs[hx.h5])!=null){
      //   text="<h5>"+text+"</h5>";
      // }
  })
    return add_tag_text;
}
const doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
  console.log("hogehoge");
  let input_text : string =  (<HTMLInputElement>document.getElementById("q_area")).value;
  let splited_text : Array<string>= input_text.split(/\r\n|\r|\n/);
  const test=["1.","(1)","①","・1"];
  let  t = new text_write(add_tags(splited_text));
  t.output();
});
