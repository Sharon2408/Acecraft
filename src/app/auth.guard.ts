import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RegisterService } from 'src/Services/register.service';
import { MessageService } from 'primeng/api';


export const authGuard: CanActivateFn = (route, state) => {
  
    const token = localStorage.getItem('token');
    const router = inject(Router)
    const reg = inject(RegisterService)
    const alertservice = inject(MessageService)
   if(token){
  
    return true

   }
  else
     {
      router.navigate(['login'])
      alertservice.add({
    key:"tc",
    severity:"error",
    summary:"Login First"
      })
      return false
     }
    
     

};
