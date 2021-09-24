import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(valor: boolean){
    if(valor){
    this.viweContainer.createEmbeddedView(this.templateRef);
    }else{
      this.viweContainer.clear();
    }
  }

  constructor(
     private templateRef: TemplateRef<HTMLElement>,
     private viweContainer: ViewContainerRef ) 
     {
      
     }

}
