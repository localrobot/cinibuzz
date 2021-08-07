module.exports = {
  tmdb: {
    output: {
      mode: 'tags-split',
      target: 'src/generated/tmdb.ts',
      schemas: 'src/generated/model',
      client: 'react-query',
      mock: false,
      override: {
        mutator: {
          path: 'src/axios.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: 'https://api.stoplight.io/v1/versions/9WaNJfGpnnQ76opqe/export/oas.json',
      converterOptions: {
        patch: true,
      },
    },
  },
};
