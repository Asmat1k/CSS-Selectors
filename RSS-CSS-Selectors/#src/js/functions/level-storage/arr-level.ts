import { Level } from "../../files/types/types";

// массив уровней
export const LEVELS: Level[] = [
  {
    toDo: 'Select the plates',
    type: 'plate',
    answer: 'plate|*|plate,plate|.table~plate|plate:first-child,plate:last-child|plate:first-child+plate:last-child|plate:first-child+plate',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate/&gt
  &ltplate/&gt
&lt/div&gt
    `,
    tableComponents: `<plate class='animated'></plate><plate class='animated'></plate>`,
    helpText: {
      title: 'Type Selector',
      subtitle: 'Select elements by their type',
      id: 'A',
      task: `Select all elements of type <strong>A</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `<code>div</code> selects all <code>&ltdiv&gt</code> elements.`,
    }
  },
  {
    toDo: 'Select apples',
    type: 'apple',
    answer: 'apple|apple,apple|apple,table+apple|apple,table~apple|apple:first-child,apple:last-child|apple:first-child,table+apple|apple:nth-child(1),apple:nth-child(2)|',
    helpUsed: false,
    status: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltapple/&gt
  &ltplate/&gt
  &ltapple/&gt
&lt/div&gt`,
    tableComponents: `<apple class='animated'></apple><plate></plate><apple class='animated'>`,
    helpText: {
      title: 'Type Selector',
      subtitle: 'Select elements by their type',
      id: 'B',
      task: `Selects all elements of type <strong>B</strong>. 
      Type refers to the type of tag, so <code>&ltdiv&gt</code>, <code>&ltp&gt</code> and <code>&ltul&gt</code> are all different element types.`,
      example: `<code>p</code> selects all <code>&ltp&gt</code> elements.`,
    }
  },
  {
    toDo: 'Select the biggest one',
    type: '.big',
    answer: `.big|lemon:last-child|lemon:nth-child(3)|table~.big|table+.big|table>.big|table>lemon:last-child|table>lemon:nth-child(3)|`,
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltlemon class = 'small'/&gt
  &ltlemon class = 'medium'/&gt
  &ltlemon class = 'big'/&gt
&lt/div&gt`,
    tableComponents: `<lemon class='small'></lemon><lemon class='medium'></lemon><lemon class='animated'></lemon>`,
    helpText: {
      title: 'Class Selector',
      subtitle: 'Select elements by their class name',
      id: '.classname',
      task: `The class selector selects all elements with that class attribute like <code>&ltdiv class='name'&gt</code>. Elements can have many classes!`,
      example: `<code>.info</code> selects all elements that have <br> <code>&ltclass = 'info'&gt</code> attribute.`,
    }
  },
  {
    toDo: 'Select pumpkin on a plate',
    type: 'plate .big',
    answer: 'plate.big|plate>big|.big|pumpkin:first-child|pumpkin:nth-child(1)|platepumpkin|plate>pumpkin|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
    &ltpumpkin class='big'/&gt
  &lt/plate&gt
  &ltpumpkin class = 'small'/&gt
&lt/div&gt`,
    tableComponents: `<plate><pumpkin class = 'animated'></pumpkin></plate><pumpkin class='small'></pumpkin>`,
    helpText: {
      title: 'Combine the Class Selector',
      subtitle: 'Select elements with class inside another element',
      id: 'A .classname',
      task: `You can combine the class selector with other selectors, like the type selector.`,
      example: `<code>div .this</code> selects all <code>&ltdiv&gt</code> elements that have <code>class='this'</code>.`,
    }
  },
  {
    toDo: 'Select the colored one',
    type: '#fancy',
    answer: '#fancy|plate:last-child|plate:nth-child(2)|.table>#fancy|.table~#fancy|.table~plate:last-child|.table~plate:nth-child(2)|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate/&gt
  &ltplate id = 'fancy'/&gt
&lt/div&gt`,
    tableComponents: `<plate></plate><plate id='fancy' class='animated'></plate>`,
    helpText: {
      title: 'ID Selector',
      subtitle: 'Select elements by their ID',
      id: '#id',
      task: `Selects the element with a specific id. Elements can only have one ID`,
      example: `<code>#only-one</code> selects all elements with <br> <code>id = 'only-one'</code>.`,
    }
  },
  {
    toDo: 'Select lemon on the plate',
    type: '#fancy lemon',
    answer: '#fancylemon|plate>lemon|lemon:first-child|lemon:nth-child(1)|platelemon|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate id = 'fancy'&gt
    &ltlemon/&gt
  &lt/plate&gt
  &ltlemon class = 'small'/&gt
&lt/div&gt`,
    tableComponents: `<plate id='fancy'><lemon class = 'animated'></lemon></plate><lemon class='small'></lemon>`,
    helpText: {
      title: 'Combine the ID Selector',
      subtitle: 'Select elements with ID inside another element',
      id: '#id A',
      task: `You can combine any selector with the descendent selector.`,
      example: `<code>#only div</code> selects all <code>&ltdiv&gt</code> elements that are inside elemets with <code>id='only'</code>.`,
    }
  },
  {
    toDo: 'Select everything you see',
    type: '*',
    answer: '*|pumpkin,apple,lemon|.table *|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltpumpkin&gt
  &ltapple&gt
  &ltlemon&gt
&lt/div&gt`,
    tableComponents: `<pumpkin class = 'animated'></pumpkin><apple class = 'animated'></apple><lemon class = 'animated'></lemon>`,
    helpText: {
      title: 'The Universal Selector',
      subtitle: 'You can select everything!',
      id: '*',
      task: `You can select all elements with the universal selector!`,
      example: `<code>*</code> selects all elements on the page.`,
    }
  },
  {
    toDo: 'Select everything on the plate',
    type: 'plate *',
    answer: 'plate*|plate>*|apple,lemon|plate>apple,plate>lemon|lemon,apple',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate&gt
    &ltapple/&gt
  &lt/plate&gt
  &ltplate&gt
    &ltlemon/&gt
  &lt/plate&gt
&lt/div&gt`,
    tableComponents: `<plate><apple class = 'animated'></apple></plate><plate><lemon class = 'animated'></lemon></plate>`,
    helpText: {
      title: 'Combine the Universal Selector',
      subtitle: 'You can select every element inside another',
      id: 'A *',
      task: `This selects all elements inside of A.`,
      example: `<code>p *</code> selects every element inside all <code>&ltp&gt</code> elements`,
    }
  },
  {
    toDo: 'Select lemon',
    type: 'pumpkin + lemon',
    answer: 'pumpkin+lemon|lemon|pumpkin~lemon|.table>lemon|.tablelemon|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltpumpkin/&gt
  &ltlemon/&gt
  &ltapple/&gt
&lt/div&gt`,
    tableComponents: `<pumpkin></pumpkin><lemon class='animated'></lemon><apple></apple>`,
    helpText: {
      title: 'Adjacent Sibling Selector',
      subtitle: 'Select an element that directly follows another element',
      id: 'A + B',
      task: `This selects all <code>B</code> elements that directly follow <code>A</code>. Elements that follow one another are called siblings. They're on the same level, or depth.`,
      example: `<code>p + div</code> selects all <code>&ltdiv&gt</code> elements that directly follow <code>&ltp&gt</code>.`,
    }
  },
  {
    toDo: 'Select apples after  the plate',
    type: 'plate ~ apple',
    answer: 'plate~apple|#fancy~apple|apple|apple:first-child,apple:last-child|',
    status: false,
    helpUsed: false,
    htmlCode:  
`&ltdiv class="table"&gt
  &ltplate id = 'fancy'/&gt
  &ltapple/&gt
  &ltapple/&gt
&lt/div&gt`,
    tableComponents: `<plate id='fancy'></plate><apple class='animated'></apple><apple class='animated'></apple>`,
    helpText: {
      title: 'General Sibling Selector',
      subtitle: 'Select elements that follows another element',
      id: 'A ~ B',
      task: `You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.`,
      example: `<code>A ~ B</code> selects all <code>B</code> that follow a <code>A</code>.`,
    }
  },
  
]