import {Component, OnInit, Input, Directive, HostListener, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[tab]',
})
export class TabComponent  {

  @Input() tab;
  public active: boolean = false;

  constructor(private template: TemplateRef<any>,
              private entry: ViewContainerRef) {
  }

  activate() {
    this.entry.createEmbeddedView(this.template);
  }


}
