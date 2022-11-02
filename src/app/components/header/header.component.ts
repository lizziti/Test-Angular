import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  text: string = 'Ökologische Nachhaltigkeit'
  @Input()
  rootClassName: string = ''
  @Input()
  Register: string = 'Register'
  @Input()
  Login: string = 'Login'

  constructor() {}
}
