import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

// --------------------  dummy data for the artists stats table

  public artistData = [

    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',
    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    },
    {
      artist: 'Liza',
      started : '22-01-2022',
      hours: '465',
      notat : '342',
      earned : '$3400',

    }
  ]

  ngOnInit() {}
}
