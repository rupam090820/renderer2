import { Component, ViewChild,Renderer2,AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements AfterViewInit{
@ViewChild('n') name!:ElementRef;
@ViewChild('p') para!:ElementRef;
@ViewChild('inputElement') inputElement!:ElementRef;
constructor(private renderer:Renderer2){}
ngAfterViewInit(): void {
  this.renderer.setStyle(this.name.nativeElement,'backgroundColor','red');
  this.renderer.setAttribute(this.name.nativeElement,'title','it is 1st div')
  this.renderer.addClass(this.name.nativeElement,'myclass')

this.renderer.setProperty(this.para.nativeElement,'innerHTML','hi i am rupam');

}

addAttribute(){
  this.renderer.setAttribute(this.inputElement.nativeElement,'value','rupam')
  console.log()
}
removeAttribute(){
  this.renderer.removeAttribute(this.inputElement.nativeElement,'value')
}
send(value:any){
console.log(value)
}
}
