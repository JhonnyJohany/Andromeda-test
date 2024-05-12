import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-andromeda-tools',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  template: ``,
  styles: [],
})
export class AndromedaToolsComponent {
  env = environment;
  constructor(private cookieService: CookieService) {}

  encryptAes(decryptData: string): string {
    return CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(decryptData),
      CryptoJS.enc.Utf8.parse(environment.symmetricKey),
      { mode: CryptoJS.mode.ECB }
    ).toString();
  }

  decryptAes(encryptData: string): string {
    return CryptoJS.AES.decrypt(
      encryptData,
      CryptoJS.enc.Utf8.parse(environment.symmetricKey),
      { mode: CryptoJS.mode.ECB }
    ).toString(CryptoJS.enc.Utf8);
  }
}
