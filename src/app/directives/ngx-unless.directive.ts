import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Custom Angular Structural Directive
// ngx is use to show it is an Angular extra directive

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) { }

  @Input()
  set ngxUnless(condition: boolean) {
      if (!condition && !this.visible) {
        this.viewContainer.createEmbeddedView(this.templateRef)
        this.visible = true;
      } else if (condition && this.visible) {
        this.viewContainer.clear();
        this.visible = false;
      }
  }

}
