`{
    entero: {
        type: INTEGER {
            options: {},
            _length: undefined,
            _zerofill: undefined,
            _decimals: undefined,
            _precision: undefined,
            _scale: undefined,
            _unsigned: undefined
        },
        Model: tabla,
        fieldName: 'entero',
        _modelAttribute: true,
        field: 'entero'
    },
    varchar: {
        type: STRING {
            options: [Object],
            _binary: undefined,
            _length: 50
        },
        Model: tabla,
        fieldName: 'varchar',
        _modelAttribute: true,
        field: 'varchar'
    },
    bool: {
        type: BOOLEAN {},
        Model: tabla,
        fieldName: 'bool',
        _modelAttribute: true,
        field: 'bool'
    },
    enum: {
        type: ENUM {
            values: [Array],
            options: [Object]
        },
        values: ['ENUM1', 'ENUM2', 'ENUM3'],
        Model: tabla,
        fieldName: 'enum',
        _modelAttribute: true,
        field: 'enum'
    }
}


app use( session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}) )

'/login', (req,res) => {
    req.session.auto={modelo:'ford'}
    req.session.nombre='leo'
    req.session.auth=true
}

'/veralgo', (req,res) => {
    let auto = req.session.auto
    if (req.session.auth) {
        res.render('veralgo', {user: req.session.nombre})
    }
}

'/salir', (req,res)=>{
    req.session.destroy((err)=>{
        ok
    })
}

`