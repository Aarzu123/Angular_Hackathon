import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}
  login()
  {
    this.router.navigate(['login']);
  }
// //   // Get NavigationStart events
// // router.events.pipe(filter(e => e instanceof NavigationStart)).subscribe(e => {
// //   const navigation = router.getCurrentNavigation();
// //   tracingService.trace({id: navigation.extras.state.tracingId});
// });
}
