const drawToolbar = {
  actions: {
    title: 'Atcelt zīmēšanu',
    text: 'Atcelt'
  },
  finish: {
    title: 'Pabeigt zīmēšanu',
    text: 'Pabeigt'
  },
  undo: {
    title: 'Dzēst pēdējo uzzīmēto punktu',
    text: 'Dzēst pēdējo punktu'
  },
  buttons: {
    polyline: 'Zīmēt līniju',
    polygon: 'Zīmēt poligonu',
    rectangle: 'Zīmēt četrstūri',
    circle: 'Zīmēt apli',
    marker: 'Zīmēt punktu',
    circlemarker: 'Zīmēt apļveida punktu'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
      start: 'Noklikšķini un velc lai zīmētu apli'
    },
    radius: 'Rādius'
  },
  circlemarker: {
    tooltip: {
      start: 'Noklikšķini kartē, lai izveidotu apļveida punktu'
    }
  },
  marker: {
    tooltip: {
      start: 'Noklikšķini kartē, lai izveidotu punktu'
    }
  },
  polygon: {
    error: '<strong>Kļūda:</strong> FOO!',
    tooltip: {
      start: 'Noklikšķi lai sāktu zīmēt figūru.',
      cont: 'Noklikšķi lai turpinātu zīmēt figūru.',
      end: 'Noklikšķini uz pirmā punkta, lai aizvērtu figūru.'
    }
  },
  polyline: {
    error: '<strong>Kļūda:</strong> figūras malas nevar krustoties!',
    tooltip: {
      start: 'Noklikšķi lai sāktu zīmēt līniju.',
      cont: 'Noklikšķi lai turpinātu zīmēt līniju.',
      end: 'Noklikšķini uz pirmā punkta, lai pabeigtu līniju.'
    }
  },
  rectangle: {
    tooltip: {
      start: 'Noklikšķini un velc lai zīmētu četrstūri.'
    }
  },
  simpleshape: {
    tooltip: {
      end: 'Atlaid peli, lai pabeigtu zīmēšanu.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
      title: 'Saglabāt izmaiņas.',
      text: 'Saglabāt'
    },
    cancel: {
      title: 'Atcelt labošanu, nesaglabāt izmaiņas.',
      text: 'Atcelt'
    },
    clearAll: {
      title: 'Notīrīt visus slāņus.',
      text: 'Notīrīt visu'
    }
  },
  buttons: {
    edit: 'Labot slāņus.',
    editDisabled: 'Nav slāņu ko labot.',
    remove: 'Dzēst slāņus.',
    removeDisabled: 'Nav slāņu ko dzēst.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
      text: 'Velc aiz vadīklām vai punktai, lai labotu figūru.',
      subtext: 'Nospied Atcelt, lai atceltu izmaiņas.'
    }
  },
  remove: {
    tooltip: {
      text: 'Noklikšķini uz figūras lai to noņemtu'
    }
  }
}

module.exports = {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers
  }
}
