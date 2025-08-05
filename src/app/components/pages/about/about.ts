import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  activeTab: string = 'empresa';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
