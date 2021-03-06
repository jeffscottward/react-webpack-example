"use strict";

var React = require('react');

var Styleguide = React.createClass({
  render: function() {
    return (
      <article>
      <h1 id="main">Styleguide</h1>

      <p>The purpose of this HTML is to help determine what default
      settings are and to make sure that all possible HTML
      Elements are included in this HTML so as to not miss any possible
      Elements when designing a site.</p>

      <hr />

      <h1 id="headings">Headings</h1>

      <h1>h1. Heading</h1>
      <h2>h2. Heading</h2>
      <h3>h3. Heading</h3>
      <h4>h4. Heading</h4>
      <h5>h5. Heading</h5>
      <h6>h6. Heading</h6>

      <hr />

      <h1 id="paragraph">Paragraph</h1>

      <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test
      link</a> adipiscing elit. Nullam dignissim convallis est.
      Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui.
      Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt
      nec, gravida vehicula, nisl. Praesent mattis, massa quis
      luctus fermentum, turpis mi volutpat justo, eu volutpat enim
      diam eget metus. Maecenas ornare tortor. Donec sed tellus eget
      sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem,
      consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet
      augue quis tellus.</p>

      <p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer
      adipiscing elit. Nullam dignissim convallis est. Quisque aliquam
      . Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
      Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula,
      nisl. Praesent mattis, massa quis luctus fermentum, turpis mi
      volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare
      tortor. Donec sed tellus eget sapien fringilla nonummy.
      Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae,
      feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

      <hr />

      <h1 id="list_types">List Types</h1>

      <h3>Definition List</h3>
      <dl>
      <dt>Definition List Title</dt>
      <dd>This is a definition list division.</dd>
      </dl>

      <h3>Ordered List</h3>
      <ol>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      </ol>

      <h3>Unordered List</h3>
      <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      </ul>

      <hr />

      <h1 id="form_elements">Fieldsets and Form Elements</h1>

      <fieldset>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
      Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi
      , imperdiet at, tincidunt nec, gravida vehicula, nisl.
      Praesent mattis, massa quis luctus fermentum, turpis mi
      volutpat justo, eu volutpat enim diam eget metus.</p>

      <form>
      <h2>Form Element</h2>

      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
      elit. Nullam dignissim convallis est. Quisque aliquam.
      Donec faucibus. Nunc iaculis suscipit dui.</p>

      <p className="field"><label htmlFor="text_field">Text Field:</label>
      <input type="text" id="text_field" autoComplete="off" /></p>
      <p className="field success"><label htmlFor="text_field">Text Field:</label>
      <input type="text" id="text_field" autoComplete="off" /></p>
      <p className="field warning"><label htmlFor="text_field">Text Field:</label>
      <input type="text" id="text_field" autoComplete="off" /></p>
      <p className="field error"><label htmlFor="text_field">Text Field:</label>
      <input type="text" id="text_field" autoComplete="off" /></p>

      <p className="field"><label htmlFor="text_area">Text Area:</label>
      <textarea id="text_area"></textarea></p>

      <p className="field"><label htmlFor="select_element">Select Element:</label>
      <select name="select_element">
      <optgroup label="Option Group 1">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      </optgroup>
      <optgroup label="Option Group 2">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
      </optgroup>
      </select></p>

      <p className="field"><label htmlFor="radio_buttons">Radio Buttons:</label>
      <label>
      <input type="radio"
      name="radio_button" value="radio_1" /> Radio 1
      </label>
      <label>
      <input type="radio"
      name="radio_button" value="radio_2" /> Radio 2
      </label>
      <label>
      <input type="radio"
      name="radio_button" value="radio_3" /> Radio 3
      </label>
      </p>

      <p className="field"><label htmlFor="checkboxes">Checkboxes:</label>
      <label>
      <input type="checkbox"
      name="checkboxes" value="check_1" /> Radio 1
      </label>
      <label>
      <input type="checkbox"
      name="checkboxes" value="check_2" /> Radio 2
      </label>
      <label>
      <input type="checkbox"
      name="checkboxes" value="check_3" /> Radio 3
      </label>
      </p>

      <p className="field"><label htmlFor="password">Password:</label>
      <input type="password"
      name="password" autoComplete="off" />
      </p>

      <p className="field"><label htmlFor="file">File Input:</label>
      <input type="file" name="file" />
      </p>


      <p className="field"><input className="btn" type="submit" value="Submit" /></p>
      </form>
      </fieldset>

      <hr />

      <h1 id="tables">Tables</h1>

      <table cellSpacing="0" cellPadding="0">
      <tbody>
      <tr>
      <th>Table Header 1</th>
      <th>Table Header 2</th>
      <th>Table Header 3</th>
      </tr>
      <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
      </tr>
      <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
      </tr>
      <tr>
      <td>Division 1</td>
      <td>Division 2</td>
      <td>Division 3</td>
      </tr>
      </tbody>
      </table>

      <hr />

      <h1 id="misc">Misc Stuff - abbr, pre, code, sub, sup, etc.</h1>

      <p>Lorem <sup>superscript</sup> dolor
      <sub>subscript</sub> amet, consectetuer adipiscing elit.
      Nullam dignissim convallis est. Quisque aliquam. <cite>cite</cite>.
      Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
      imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis,
      massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat
      enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget
      sapien fringilla nonummy.
      <abbr title="National Basketball Association">NBA</abbr>
      Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae,
      feugiat in, nunc. Morbi imperdiet augue quis tellus.
      <abbr title="Avenue">AVE</abbr></p>

      <pre><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Nullam dignissim convallis est. Quisque aliquam. Donec faucibus.
      Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
      imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
      mattis, massa quis luctus fermentum, turpis mi volutpat justo,
      eu volutpat enim diam eget metus. Maecenas ornare tortor.
      Donec sed tellus eget sapien fringilla nonummy.
      <abbr title="National Basketball Association">NBA</abbr>
      Mauris a ante. Suspendisse quam sem, consequat at,
      commodo vitae, feugiat in, nunc. Morbi imperdiet
      augue quis tellus.  <abbr title="Avenue">AVE</abbr></p></pre>

      <blockquote>
      <p> This stylesheet is going to help so freaking much.</p>
      <cite>Blockquote</cite>
      </blockquote>

      <hr />

      <h1 id="flashes">Flash / error messages</h1>
      <div className="flash success">
      <span>This is a success message <a href="#">with a link</a></span>
      </div>
      <div className="flash error">
      <span>This is an error message <a href="#">with a link</a></span>
      </div>
      <div className="flash notice">
      <span>This is a notice message <a href="#">with a link</a></span>
      </div>
      <div className="flash warning">
      <span>This is a warning message <a href="#">with a link</a></span>
      </div>

      <hr />
      </article>
    );
  }
});

module.exports = Styleguide;
