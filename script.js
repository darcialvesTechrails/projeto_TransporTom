function transpose() {
    const originalKey = document.getElementById('originalKey').value;
    const transposeTo = document.getElementById('transposeTo').value;
    
    const scales = {
        chromatic: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        pentatonic: ['C', 'D', 'E', 'G', 'A'],
        pentablues: ['C', 'D#', 'F', 'F#', 'G', 'A#']
    };
    
    const transposedScales = {
        Bb: transposeScale(scales, originalKey, 'Bb'),
        Eb: transposeScale(scales, originalKey, 'Eb')
    };
    
    displayScales(transposedScales);
}

function transposeScale(scales, originalKey, transposeTo) {
    const interval = transposeTo === 'Bb' ? 2 : 3; // Intervalo de transposição
    const transposed = {};
    
    for (const [scaleName, notes] of Object.entries(scales)) {
        transposed[scaleName] = notes.map(note => transposeNote(note, interval));
    }
    
    return transposed;
}

function transposeNote(note, interval) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const index = notes.indexOf(note);
    return notes[(index + interval) % notes.length];
}

function displayScales(transposedScales) {
    const BbScaleDiv = document.getElementById('BbScale');
    const EbScaleDiv = document.getElementById('EbScale');
    
    BbScaleDiv.innerHTML = '<h3>Escalas em Bb (Si bemol)</h3>';
    EbScaleDiv.innerHTML = '<h3>Escalas em Eb (Mi bemol)</h3>';
    
    for (const [scaleName, notes] of Object.entries(transposedScales.Bb)) {
        BbScaleDiv.innerHTML += `<p>${scaleName}: ${notes.join(', ')}</p>`;
    }
    
    for (const [scaleName, notes] of Object.entries(transposedScales.Eb)) {
        EbScaleDiv.innerHTML += `<p>${scaleName}: ${notes.join(', ')}</p>`;
    }
}