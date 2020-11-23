# Colour Splash

## Colour Combination Tester
---

An easy-to-use website for trying out combinations of colours. The user can then replicate their colour selection in their own website or project. The website is made up of two pages: a homepage with site introduction, call to action, user reviews and contact form; a tester page with interactive color picker buttons and help, share and refresh control options. 

The primary goal of the website is to offer a simple tool which users, from designers to amateurs, will return to every time they need to experiment with colours. They might even recommend the site to their friends or colleagues. A website with heavy traffic offers an optimal space for paid advertisements, should the owner wish to monetize it.

## UX
---
### **User Profile**
**The ideal user for this website is:**

The ideal user for this site is a designer (websites, graphics) who will find this tool useful on a regular basis. However, its use can be extended to any project creater who needs a colour scheme.

**Users of this website are looking for:**

- A space to test out different combinations of colours;
- Inspiration/suggestions for attractive colour combinations;
- Both a simple and efficient way of selecting colour combinations.

**This website facilitates this for the user by providing:**

- Simple-to-use color picker buttons;
- Both background and textual samples that can have their colour changed;
- Straightforward steps for use, including visual prompts, under the 'help' control;
- A 'share' option so users can save their colour selection locally;
- Easy navigation - text is kept to a minimum, clear call to action, two-page website, clean layout.

### **User Stories**

1. As a new user, I want to find it easy to navigate the website and find the testing tool.
2. As a new user who is not a designer/developer, I want to find inspiration with attractive example colour combinations.
3. As a new user, I want to find instructions for using the site most effectively for my needs.
4. As an existing user, I want to export my chosen colour combination so I can refer back to it when needed.
5. As an existing user, I want to be able to contact the owner of the site with a question about, or problem with, using the website.
6. As a new user, I want assurance that others recommend the use of this tool.
7. As an existing user, I want to be able to reset my colour selection and begin over.
8. As an existing user, I want to experiment with shades of colours, which update and display instantaneously for me to see.
9. As an existing user with a colour selection already in mind, I want to input a HEX or RGBA number directly into the colour picker.

### **Wireframe Mockups**

[**Home**](assets/images/homewireframe-coloursplash.pdf)

[**Tester**](/assets/images/testerwireframe-coloursplash.pdf)

## Features
---

Each page features a navigation bar where all the website's pages can be accessed and the conventional positioning of the website logo to the left-hand side.

Both pages' main titles have the CSS text gradient effect applied, which changes when the user hovers over them, to ensure a consistent theme across the website.

Both pages have a footer containing the website's logo in the center.

A favicon matching the website's logo is installed in the head of each page.


### **Home**

The homepage features a **jumbotron** with a box-shadow effect, which makes it appear to be 'floating' above the colourful **background image**. It contains: a bold **welcome message** stating the purpose of the site; an artistically-designed and simple **three step guide** to using the site; and a clear **call to action** button, which grows in size when hovered over to encourage clicking, prompts the user to visit the Tester page. 

On extra-small screens the three steps image disappears from the jumbotron and instead appears in three blocks, one for each step, below it. This is because at smaller screen sizes, the text was too small to read in the image. The blocks' background colours on extra-small screens are the same as those on larger screens to maintain visual consistency. 

The **review boxes** which appear below the jumbotron and homepage background image serve as a further prompt to the user to go and try out the tester tool if they have not yet clicked the call to action button. Each review box has a background colour which blends with the colour scheme of the homepage background image above, which is both visually-appealing and signifies the website is passionate about beautiful colour combinations; it can help the user find beautiful colours for their website too. On medium screens, the two reviews on the left and right disappear to avoid a 'cluttered' look ensure the remain reviews match the visible colours on the background image above. On small screens, the reviews disappear completely due to significantly less space. 

The last feature on the homepage is the **contact section.** The large rhetorical question draws the user to the section and the question mark image visually reenforces the purpose of the section. On clicking the button below, a **contact form** contained in a modal drops down and the user can submit a question through the EmailJS API. A green **success message** replaces the submit button if the message has been successfully sent. Similarly, a red **fail message** appears if it has not and requests that the user tries again later. On smaller screens the contact section has its content justified in the center with each element stacked over each other; on such a screen size this is a cleaner layout. On larger screen sizes with more space, the text and button content appears on the left but aligned to the right and the question mark image on the right by aligned to the left. This is a more interesting layout to implement when the screen size allows for it. 

### **Tester**

The tester page contains the **colour tester tool.** The tool had **three controls,** 'Refresh', 'Share' and 'Help', intuitively placed in the top right hand corner to replicate the conventional positioning of game controls. 

The **'Refresh'** **control** reloads the page so that the current colour selections made by the user are removed and the page becomes a fresh palette. Since the user may click this by accident and risk losing a colour selection, a **warning modal** pops up asking the user to confirm or cancel the refresh. Intuitive colour coding for 'cancel' as red and 'yes, refresh' as green.

The **'Share'** **control** allows the user to export their current colour selection in text format to save on their device and refer back to after then have exited the site. 

The **'Help'** **control** is linked to a **help modal** which pops up with **detailed instructions** as to how to use the tool should they not figure it out intuitively (perhaps less tech savvy people). The instructions are broken down in to **3 steps** to make it simple and easy to remember. **'Swatch' and 'color-picker' images** have been added after each reference since one test user for the developing website did not understand what these terms referred to. The modal can be easily closed using the **green 'Got it!' button.**

In the center of the tool, there are **three blocks** stacked on top of each other and each contains **three text samples** (either a suitably-sized heading, sub-heading or paragraph text). These text samples are the dictionary definition of "colour", rather than *lorem ipsum* or a generic 'heading', 'sub-heading' etc., to provide a more interesting, and on theme, text sample for the user to work with. The **entire background** of the tool is a sample that can be changed too. 

The block samples, before user interaction, **begin as either red, green or purple.** Originally they were a light grey to suggest a 'blank workspace' feel, however test users suggested a clearer relationship between the block and its swatch could be seen if there was a colour relationship between them independent to others. White text goes with all three of these and the background also begins with this neutral tone.

To the right hand side of the blocks are **seven swatches** which each correspond to a block, text or background colour. There is a **'Swatches' label** and **sub-section label** above them for user clarity. On click, each swatch opens up a **color-picker,** where the user can browse colours with **a slider** or **directly input** a HEX, RGBA et al. The corresponding sample changes colour as soon so the colour-picker slider changes, allowing the user to instantaneously review their current selection. If the user is happy with their new selection, they can click the **'Save' button** and it will be saved to the swatch. If they wish to return to their **previous selection,** they can select this by clicking it in the top left-hand corner.

On larger screens the **hex number** of the current colour selection appears to the right-hand side of each swatch. This is a helpful feature for a designer since, as only one color-picker can be open at a time, they may wish to replicate a colour in another sample on the page. On smaller screens there is not sufficient space for these hex numbers, so they disappear; the user can still access all colour numbers in each individual color-picker.

The tool is **fully responsive** on all screen sizes, with all text sizes and block dimensions adjusting appropriately.


### **Interactive Features**

- **Responsive Headings:** The rainbow gradient effect on the background of the main heading on each page responds to the user hovering over it by transitioning to the red shade only. Hovering off again transitions the colours back to the rainbow effect.

- **Call to action buttons**: The two buttons on the homepage, 'Get Started' and 'Get in Touch' grow in size when the user hovers over them to prompt clicking.

- **Contact Form:** The 'Get in Touch' button on the home page triggers a modal to open on the left-hand side of the screen. Providing all required fields have been filled out, pressing the 'Submit' button will trigger the sendMail() function in the Javascript file sendQuestion.js.

- **Help Modal:** The help control on the tester page triggers a modal to drop down from the top of the page, which the user can dismiss by clicking the 'Got it!' button.

- **Refresh:** The refresh control triggers a warning modal. Clicking 'Yes, refresh' in this modal resets the tester tool for the user.

- **Color-pickers:** The color pickers are triggered to expand by the user clicking on their corresponding swatch. The user can input a color reference in the color picker by selecting a type along the bottom (e.g. hex) and inserting the reference in the bottom left-hand box, changing the corresponding sample colour on the screen. Alternatively, they can drag the color picker around the palette in the center, click a sample colour along the bottom and adjust the opacity on the right-hand side slider if they do not have an exact colour in mind. Colour changes happen simultaneously to the user's interaction with the color pickers. If the user clicks 'Save' in the bottom right-hand corner, the current current selection will become the new colour selection stored in the swatch. There are seven different color pickers, thus the user can input up to seven different colours to the page.


### **Features to Implement in the Future**

- Users able to input their own custom text, to test their colour selections with, or manipulate the sizes of the blocks. This would allow the user to mimic more closely their own project or website for a more accurate colour testing experience - a matter of time restraint in implementing this feature at this stage.


## Technologies Used
---

- This project uses **HTML, CSS and Javascript** programming languages.
- [**Gitpod**](https://www.gitpod.io/) - the IDE Gitpod was used in the building process of this website.
- [**BootstrapCDN**](https://www.bootstrapcdn.com/) - this project uses Bootstrap4 to make a fully responsive website and optimise its layout and structure.
- [**FontAwesome**](https://fontawesome.com/) - this project uses FontAwesome 5 to provide icons.
- [**Google Fonts**](https://fonts.google.com/) - this project uses Google Fonts to style the website's fonts.
- [**EmailJS**](https://www.emailjs.com/) - this project uses the EmailJS API to facilitate email communication between users and website owner.
- [**Color-Picker Library**](https://github.com/Simonwep/pickr) - this project uses the Color-Picker public library by Simonwep on Github.
- [**Notion**](https://www.notion.so/) - this project used the desktop app Notion to draft and edit the README and TESTING files in markdown more easily, to then be copied into the actual files.
- [**Keynote - Apple(UK)**](https://www.apple.com/uk/keynote/) - this project used Keynote to create all graphics (three steps image) used in this project that have not be credited to other sources.
- [**Adobe Photoshop 2020**](https://www.adobe.com/uk/products/photoshop.html?sdid=88X75SKR&mv=search&ef_id=Cj0KCQiAqdP9BRDVARIsAGSZ8Ak7I5GPFqK_hyGJJ9M9rpFhX_cfOAqTWV44cFbDwwbIFny_prib-K0aAvzrEALw_wcB:G:s&s_kwcid=AL!3085!3!428621692972!e!!g!!adobe%20photoshop!9753976727!99414617483&gclid=Cj0KCQiAqdP9BRDVARIsAGSZ8Ak7I5GPFqK_hyGJJ9M9rpFhX_cfOAqTWV44cFbDwwbIFny_prib-K0aAvzrEALw_wcB) - this project used Adobe Photoshop to edit site graphics and the favicon image.
- [**Figma**](https://www.figma.com/) - this project used Figma to construct wireframes in the design stage of the website.

## Testing
---
Testing information can be found in this [TESTING.md file](TESTING.md).

## Deployment
---
STILL TO COMPLETE.

## Credits
---

### **Design**

- The "Ideas" control for the tester displays colour schemes inspired by [Visme's blog post on colour schemes](https://visme.co/blog/website-color-schemes/).

### **Media**

- The background image colour-splash-background.jpg was taken by Paweł Czerwiński and was obtained from [Unsplash](https://unsplash.com/photos/3k9PGKWt7ik).
- The ms2-favicon is an edited version of the [FontAwesome palette icon](https://fontawesome.com/icons/palette?style=solid).

### **Code**

- Positioning and translating the contents of review boxes on homepage uses the CSS suggestions found on [W3C](https://www.w3.org/Style/Examples/007/center.en.html#block).
- The CSS text gradient effect applied to the main headings was originally taken from [Sarah L. Fossheim](https://fossheim.io/writing/posts/css-text-gradient/) and edited for this website.
- Preventing the #three-steps image on the homepage from being draggable or selectable uses the CSS found on [this Stackoverflow thread](https://stackoverflow.com/questions/12906789/preventing-an-image-from-being-draggable-or-selectable-without-using-js).
- The tester page uses the Color-Picker library by [Simonwep on Github](https://github.com/Simonwep/pickr).
- The contact form on the homepage is facilitated by the [EmailJS API](https://www.emailjs.com/).

