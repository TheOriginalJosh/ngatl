import {
  Component,
  AfterViewInit,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';

// libs
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

// nativescript

// app

@Component({
  moduleId: module.id,
  selector: 'ngatl-ns-sample',
  templateUrl: 'sample.component.html'
})
export class SampleComponent implements AfterViewInit, OnInit, OnDestroy {
  constructor(private _store: Store<any>) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnDestroy() {}
}
