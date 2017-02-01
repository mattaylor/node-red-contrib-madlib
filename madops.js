var madops = {
  _proto: {
    argKeys: ['source', 'result'],
    defaults: {
      method: {},
      source: { value: '$result' },
      result: { value: '$result.out' },
      params: { value: '' }
    },
    getQuery: (prop, keys) => {
      var args = keys.map(a => prop[a] ? JSON.stringify(prop[a]) : 'null')
      var mads = `select madlib.${prop.method}(${args.join(',').replace(/"/g, '\'')}${prop.params})`
      var drop = 'drop table if exists '
      return [ drop + prop.result, drop + prop.result + '_summary', mads ]
    }
  },
  matrix: {
    final: true,
    argKeys: ['source', 'srcArg', 'result', 'resArg'],
    defaults: {
      srcArg: {},
      resArg: {},
      method: {
        options: {
          matrix_trans: 'Transpose',
          matrix_add: 'Add Input2 to Input1',
          matrix_sub: 'Subtract Input 2 from Input1',
          matrix_elem_mult: '',
          matrix_scalar_mult: '',
          matrix_vec_mult: '',
          matrix_extract_row: '',
          matrix_extract_col: '',
          matrix_extract_diag: '',
          matrix_max: '',
          matrix_min: '',
          matrix_mean: '',
          matrix_norm: 'Frobenius Norm',
          matrix_inverse: 'Inverse',
          matrix_cholensky: 'Cholensky Decompostion',
          matrix_qr: 'QR Decompostion',
          matrix_rank: 'Rank Matrix Computation'
        }
      }
    }
  },
  outliers: {},
  normalise: {},
  regression: {
    defaults: {
      method: {
        options: {
          clustered_variance: '',
          coxph: '',
          elastic_net: '',
          glm: 'Generalised Linear Model',
          linregr_train: 'Linear Regression',
          logregr_train: 'Logistic Regression',
          margins: 'Marginal Effects',
          multinom: 'Multinomial Regression',
          ordinal: 'Ordinal Regression',
          robust_variance: ''
        }
      }
    }
  },
  svm: {
    defaults: {
      prefix: {},
      rowKey: {},
      rowDim: {},
      colKey: {},
      colDim: {},
      nIters: {},
      k: {},
      method: {
        options: {
          dense: '',
          sparse: '',
          sparse_native: ''
        }
      }
    }
  },
  eval: {
    defaults: {
      preCol: {},
      obsCol: {},
      grpCol: {},
      method: {
        options: {
          mean_abs_error: '',
          mean_abs_perc_error: '',
          mean_squared_error: '',
          r2_score: '',
          binary_classifier: '',
          area_under_roc: '',
          confusion_matrix: ''
        }
      }
    }
  },
  PCA: {
    defaults: {
      method: {
        value: 'train',
        options: {
          train: '',
          sparse_train: ''
        }
      },
      comps: { value: 1 }
    }
  },
  summary: { 
    defaults: {
      dataCols: {},
      groupCols: {}
    }
  },
  predict: { defaults: {}
  },
  pmml: {}
}

if (typeof module === 'object') module.exports = madops
