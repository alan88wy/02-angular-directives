import { Directive, HostBinding, HostListener, Input, Output, EventEmitter } from '@angular/core';

// Attribute Directive
@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'purple',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey',
    'red',
    'blue',
    'pink'
  ];

  @Input('highlighted')
  isHighlighted = false;

  @Output()
  toggleHighlight: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('style.color')
  color!: string;

  @HostBinding('style.border-color')
  borderColor!: string;

  // Use HostBinding if we want to change DOM properties
  // like add or remove CSS Class or Style

  // @HostBinding('className')
  // get cssClasses() {
  //   return 'highlighted'
  // }

 // We do this if we only wants to apply to specific class

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted
  }

  // Changing Style
  // @HostBinding('style.border')
  // get cssStyle() {
  //   return '2px solid blue'
  // }

  // Setting HTML Attribute
  @HostBinding('attr.disabled')
  get disabled() {
    return true
  }

  @HostListener('mouseover')
    onMouseOver() {
      const colorPick = Math.floor(Math.random() * this.possibleColors.length);
      // this.color = this.possibleColors[colorPick];
      this.borderColor = this.possibleColors[colorPick];
      this.isHighlighted = true;
      this.toggleHighlight.emit(this.isHighlighted);
    }

    @HostListener('mouseleave')
      onMouseLeave() {
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        // this.color = this.possibleColors[colorPick];
        this.borderColor = this.possibleColors[colorPick];
        this.isHighlighted = !this.isHighlighted;
        this.toggleHighlight.emit(this.isHighlighted);
      }

  @HostListener('click', ['$event'])
  onUserClick() {
    console.log('Highlighted')
  }


  constructor() {

  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }


}
