import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { RegisterService } from 'src/Services/register.service';


export const authGuard: CanActivateFn = (route, state) => {
  
    const token = localStorage.getItem('token');
    const router = inject(Router)
    const reg = inject(RegisterService)
    
   if(token){
    reg.validateUser(true);
    return true

   }
  else
     {
      router.navigate(['login'])
      // this.alert.add({})
      return false
     }
    
     

};
