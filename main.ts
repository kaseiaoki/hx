
let output_text :string = "";
let index :number = 1;
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

const doc = document.getElementById('wordbutton');
doc.addEventListener(EventName.CLICK, function () {
  console.log("hogehoge");
  let input_text : string =  (<HTMLInputElement>document.getElementById("q_area")).value;
  let splited_text : Array<string>= input_text.split(/\r\n|\r|\n/);
  const test=["1.","(1)","①","・1"];
  splited_text.forEach(text => {
      if(text.match(hxs[hx.h2])!=null){
        text="<h2>"+text+"</h2>";
      }else if(text.match(hxs[hx.h3])!=null){
        text="<h3>"+text+"</h3>";
      }else if(text.match(hxs[hx.h4])!=null){
        text="<h4>"+text+"</h4>";
      }
      // }else if(text.match(hxs[hx.h5])!=null){
      //   text="<h5>"+text+"</h5>";
      // }
     output_text += text+"\r";
  });
  console.log(output_text)
});
