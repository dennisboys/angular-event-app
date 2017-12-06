import { Injectable } from '@angular/core';

import toastr from 'toastr';

// wrap the Toastr library into a service
@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}