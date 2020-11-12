// Original code credit: https://github.com/Simonwep/pickr#getting-started

//---------------------------------------------------------------- COLOUR ONE (block)

// Displays swatch 1 with interactive color picker tool when clicked.
const pickr1 = Pickr.create({
    el: '.color-picker-1',
    theme: 'classic',
    default: '#EF7566',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the background colour of #color-sample-one block to match the user's current selection on color-picker-1.
pickr1.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('color-sample-1').style.background = rgbaColor;
})

// Changes the hex label next to swatch 1 to match the currently selected color by user.
pickr1.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-one').innerText = hexColor
})

//---------------------------------------------------------------- COLOUR TWO (block)

// Displays swatch 2 with interactive color picker tool when clicked.
const pickr2 = Pickr.create({
    el: '.color-picker-2',
    theme: 'classic',
    default: '#46D9BD',

    swatches: [
         'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the background colour of #color-sample-two block to match the user's current selection on color-picker-2.
pickr2.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('color-sample-2').style.background = rgbaColor;
})

// Changes the hex label next to swatch 2 to match the currently selected color by user.
pickr2.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-two').innerText = hexColor
})

//---------------------------------------------------------------- COLOUR THREE (block)

// Displays swatch 3 with interactive color picker tool when clicked.
const pickr3 = Pickr.create({
    el: '.color-picker-3',
    theme: 'classic',
    default: '#BD60CE',

    swatches: [
         'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the background colour of #color-sample-three block to match the user's current selection on color-picker-3.
pickr3.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('color-sample-3').style.background = rgbaColor;
})

// Changes the hex label next to swatch 3 to match the currently selected color by user.
pickr3.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-three').innerText = hexColor
})

//---------------------------------------------------------------- COLOUR FOUR (heading text)

// Displays swatch 4 with interactive color picker tool when clicked.
const pickr4 = Pickr.create({
    el: '.color-picker-4',
    theme: 'classic',
    default: '#FFFFFF',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the text colour of #sample-heading text to match the user's current selection on color-picker-4.
pickr4.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('sample-heading').style.color = rgbaColor;
})

// Changes the hex label next to swatch 4 to match the currently selected color by user.
pickr4.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-four').innerText = hexColor
})


//---------------------------------------------------------------- COLOUR FIVE (SUB-heading text)
// Displays swatch 5 with interactive color picker tool when clicked.
const pickr5 = Pickr.create({
    el: '.color-picker-5',
    theme: 'classic',
    default: '#FFFFFF',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the text colour of #sample-subheading text to match the user's current selection on color-picker-5.
pickr5.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('sample-subheading').style.color = rgbaColor;
})

// Changes the hex label next to swatch 5 to match the currently selected color by user.
pickr5.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-five').innerText = hexColor
})

//---------------------------------------------------------------- COLOUR SIX (paragraph text)
// Displays swatch 6 with interactive color picker tool when clicked.
const pickr6 = Pickr.create({
    el: '.color-picker-6',
    theme: 'classic',
    default: '#FFFFFF',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the text colour of #sample-paragraph text to match the user's current selection on color-picker-6.
pickr6.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('sample-paragraph').style.color = rgbaColor;
})

// Changes the hex label next to swatch 6 to match the currently selected color by user.
pickr6.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-six').innerText = hexColor
})


//---------------------------------------------------------------- COLOUR SEVEN (background)

// Displays swatch 7 with interactive color picker tool when clicked.
const pickr7 = Pickr.create({
    el: '.color-picker-7',
    theme: 'classic',
    default: '#ffffff',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

// Changes the background of the entire #color-sampling-area to match the user's current selection on color-picker-7.
pickr7.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    console.log(rgbaColor)
    document.getElementById('colour-sampling-area').style.background = rgbaColor;
})

// Changes the hex label next to swatch 7 to match the currently selected color by user.
pickr7.on('change', (color, instance) => {
    const hexColor = color.toHEXA().toString();
    console.log(hexColor)
    document.getElementById('hex-seven').innerText = hexColor
})