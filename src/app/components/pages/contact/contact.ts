import { Component } from '@angular/core';
import { Email } from './email/email';
import { Sms } from './sms/sms';
import { Phone } from './phone/phone';
import { Wpp } from './wpp/wpp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, Email, Sms, Phone, Wpp],
  templateUrl: './contact.html',
  styles: ``,
})
export class Contact {
  activeTab: string = 'email';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
