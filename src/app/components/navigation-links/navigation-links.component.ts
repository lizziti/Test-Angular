import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text3: string = 'Team'
  @Input()
  text1: string = 'Features'
  @Input()
  text: string = 'Home'
  @Input()
  rootClassName: string = ''
  @Input()
  text2: string = 'Pricing'

  constructor() {}
}
