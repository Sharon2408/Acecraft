import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MessageService } from 'primeng/api';


export const authGuard: CanActivateFn = (route, state) => {
  
    const token = localStorage.getItem('token');
    const router = inject(Router)
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
