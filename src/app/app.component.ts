import { Component ,EventEmitter, ChangeDetectorRef} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private results = [];
  myForm = new FormGroup({
   term: new FormControl(''),
 });
 
   constructor(public http: HttpClient) { }
 
   ngOnInit() {
     
     //.pipe(distinctUntilChanged())
     this.myForm.valueChanges
       .pipe(debounceTime(400))
       .subscribe(searchTerm => {
         this.http.get('http://localhost:4000/api/tasks').subscribe((data: any) => {
           /* tslint:disable:no-console */
           console.time('request-length');
           console.log(data);
           console.timeEnd('request-length');
           this.results = data.results;
         });
       });
     }
 
   private search(term) {
     console.log(term);
     this.http.get('http://localhost:4000/api/tasks').toPromise()
     .then((data: any) => {
       /* tslint:disable:no-console */
       console.time('request-length');
       console.log(data);
       console.timeEnd('request-length');
       this.results = data.results;
     });
   }
}
