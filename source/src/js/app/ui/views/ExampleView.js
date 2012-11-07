/*
Lavaca 1.0.4
Copyright (c) 2012 Mutual Mobile

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(ns, $, ScrollableView) {

/**
 * @class app.ui.ExampleView
 * @super app.ui.ScrollableView
 * Example view type
 */
ns.ExampleView = ScrollableView.extend(function(){
  ScrollableView.apply(this);

  var exampleModel = app.models.get('example');

  exampleModel.set('name', 'Kelly');

  this
    .mapChildView({
      '.item' : {
                 TView: ns.ExampleChildView,
                 model: exampleModel
                },
      '.otherItem' : {
                 TView: ns.ExampleChildView,
                 model: exampleModel
                }
    });

  var childEvents = {
    'itemClick' : {
                    TView: ns.ExampleChildView,
                    callback: this.itemClick  
                  }
  };

  this.mapChildViewEvent(childEvents);

},{
  /**
   * @field {String} template
   * @default 'example'
   * The name of the template used by the view
   */
  template: 'example',
  /**
   * @field {String} className
   * @default 'example'
   * A class name added to the view container
   */
  className: 'example',

  itemClick : function(params){
    Lavaca.log('A child View fired and event!');
    Lavaca.log($(params).text());
  }
  
});

})(app.ui.views, Lavaca.$, app.ui.views.ScrollableView);