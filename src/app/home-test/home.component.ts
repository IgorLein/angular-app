import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { HomeTestComponent } from '../home-test/home-test.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  testObj = {
    counter1: 0,
    list: [
      { value: 1 },
      { value: 2 },
      { value: 3 },
    ],
  };
  highLightColor = 'green';
  numbers = [1, 2, 3, 4, 5];
  embeddedViewContext = { index: 1 };

  nestedList = [
    { type: "dir", name: "src", contents:
        [
            { type: "dir", name: "doc", contents:
                [
                    { type: "file", name: "TOC.md" },
                    { type: "file", name: "css.md" },
                    { type: "file", name: "extend.md" },
                    { type: "file", name: "faq.md" },
                    { type: "file", name: "html.md" },
                    { type: "file", name: "js.md" },
                    { type: "file", name: "misc.md" },
                    { type: "file", name: "usage.md" }
                ]
            },
            { type: "dir", name: "img", contents:
                [
                    { type: "file", name: ".gitignore" }
                ]
            },
            { type: "dir", name: "js", contents:
                [
                    { type: "file", name: "main.js" },
                    { type: "file", name: "plugins.js" }
                ]
            },
            { type: "file", name: "404.html" },
            { type: "file", name: "LICENSE.txt" },
            { type: "file", name: "browserconfig.xml" },
            { type: "file", name: "favicon.ico" },
            { type: "file", name: "humans.txt" },
            { type: "file", name: "icon.png" },
            { type: "file", name: "index.html" },
            { type: "file", name: "robots.txt" },
            { type: "file", name: "site.webmanifest" },
            { type: "file", name: "tile-wide.png" },
            { type: "file", name: "tile.png" }
        ]
    },
    { type: "dir", name: "test", contents:
        [
            { type: "file", name: "file_content.js" },
            { type: "file", name: "file_existence.js" }
        ]
    },
    { type: "file", name: "CHANGELOG.md" },
    { type: "file", name: "LICENSE.txt" },
    { type: "file", name: "README.md" },
    { type: "file", name: "gulpfile.babel.js" },
    { type: "file", name: "modernizr-config.json" },
    { type: "file", name: "package.json" }
];

  @ViewChild('viewContainer', { read: ViewContainerRef }) viewContainer: ViewContainerRef;
  @ViewChild('tmpl', { read: TemplateRef }) tmpl: TemplateRef<any>;

  constructor(
    private quoteService: QuoteService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    console.log('HomeComponent ngOnInit');
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });

    this.viewContainer.createEmbeddedView(this.tmpl, { context: this.embeddedViewContext });

    const factory = this.componentFactoryResolver.resolveComponentFactory(HomeTestComponent);
    const componentRef: ComponentRef<HomeTestComponent> = this.viewContainer.createComponent(factory);
    componentRef.instance.id = 'DynamicComponent1';
    componentRef.instance.list = [
      { value: 4 },
      { value: 5 },
      { value: 6 },
    ];
  }

  handleIncrementCounter1 = () => {
    this.testObj.counter1++;
    this.numbers.push(this.numbers.length + 1);
    this.embeddedViewContext.index++;
  }

  handleModifyList = () => {
    this.testObj.list[1].value = 4;
    this.testObj.list.push({ value: 4 });
  }
}
