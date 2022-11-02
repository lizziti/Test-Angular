import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Register } from './register.component'

const routes = [
  {
    path: '',
    component: Register,
  },
]

@NgModule({
  declarations: [Register],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Register],
})
export class RegisterModule {}
