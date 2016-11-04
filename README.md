# ng2-multiple-selection
Angular 2: Multiple Selection

<strong>Step 1:</strong> Install angular-2-multiple-selection package
 - Using npm:
 <!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">npm install angular<span style="color: #333333">-</span><span style="color: #0000DD; font-weight: bold">2</span><span style="color: #333333">-</span>multiple<span style="color: #333333">-</span>selection <span style="color: #333333">--</span>save
</pre></div>
 - or add package in "package.json":
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="background-color: #fff0f0">&quot;devDependencies&quot;</span><span style="color: #FF0000; background-color: #FFAAAA">:</span> {
    <span style="color: #007700">&quot;angular-2-multiple-selection&quot;</span>: <span style="background-color: #fff0f0">&quot;*&quot;</span>
}
</pre></div>

<strong>Step 2:</strong> "app.module.ts"
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #008800; font-weight: bold">import</span> { MultipleSelect } from <span style="background-color: #fff0f0">&quot;angular-2-multiple-selection/multiple-select&quot;</span>;
</pre></div>

<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #FF0000; background-color: #FFAAAA">@</span>NgModule({
    declarations<span style="color: #333333">:</span> [
        MultipleSelect
    ]
})
</pre></div>

<strong>Step 3:</strong> "app.component.html":
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #007700">&lt;multiple</span><span style="color: #0000CC">-select</span> <span style="color: #FF0000; background-color: #FFAAAA">[</span><span style="color: #0000CC">multipleSelect</span><span style="color: #FF0000; background-color: #FFAAAA">]=&quot;</span><span style="color: #0000CC">multipleSelect</span><span style="color: #FF0000; background-color: #FFAAAA">&quot;</span><span style="color: #007700">&gt;</span><span style="color: #FF0000; background-color: #FFAAAA">&lt;</span>/multiple-select&gt;
</pre></div>

<strong>Step 4:</strong> "app.component.ts":
<!-- code formatted by http://manoli.net/csharpformat/ -->
<pre class="csharpcode">
import { ItemsSelect } <span class="kwrd">from</span> <span class="str">"angular-2-multiple-selection/sources/models/items-select"</span>;
import { MultipleSelect } <span class="kwrd">from</span> <span class="str">"angular-2-multiple-selection/sources/models/multiple-select"</span>;
export <span class="kwrd">class</span> AppComponent {
    multipleSelect: MultipleSelect = <span class="kwrd">new</span> MultipleSelect();
    constructor() {
        <span class="kwrd">this</span>.insertData();        
    }
    insertData() {
        let item1 = <span class="kwrd">new</span> ItemsSelect(1, 1, <span class="str">'Item 1'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item9 = <span class="kwrd">new</span> ItemsSelect(9, 9, <span class="str">'Item 9'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item10 = <span class="kwrd">new</span> ItemsSelect(10, 10, <span class="str">'Item 10'</span>, <span class="kwrd">false</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item11 = <span class="kwrd">new</span> ItemsSelect(11, 11, <span class="str">'Item 11'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, [item9, item10]);
        let item8 = <span class="kwrd">new</span> ItemsSelect(8, 8, <span class="str">'Item 8'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, [item11]);
        let item2 = <span class="kwrd">new</span> ItemsSelect(2, 2, <span class="str">'Item 2'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, [item1, item8]);
        let item4 = <span class="kwrd">new</span> ItemsSelect(4, 4, <span class="str">'Item 4'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item3 = <span class="kwrd">new</span> ItemsSelect(3, 3, <span class="str">'Item 3'</span>, <span class="kwrd">false</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, [item2, item4]);
        let item5 = <span class="kwrd">new</span> ItemsSelect(5, 5, <span class="str">'Item 5'</span>, <span class="kwrd">false</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item6 = <span class="kwrd">new</span> ItemsSelect(6, 6, <span class="str">'Item 6'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, []);
        let item7 = <span class="kwrd">new</span> ItemsSelect(7, 7, <span class="str">'Item 7'</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, <span class="kwrd">true</span>, [item5, item6]);

        <span class="kwrd">this</span>.multipleSelect.items = [item3, item7];
        <span class="kwrd">this</span>.multipleSelect.numberItemsDisplay = 5;
    }
}</pre>

