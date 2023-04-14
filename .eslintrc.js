module.exports = {
    "env": {
			"browser": true,
			"es2021": true,
			"node": true,
			"commonjs": true
    },
		"globals": {
			'Promise': 'off',
			"process": true
		}, 
    "extends": [
			'plugin:vue/essential',
			'eslint:recommended'
        // "plugin:vue/vue3-essential",
        // "standard-with-typescript"
    ],
    "overrides": [
    ],
    "parserOptions": {
			"ecmaVersion": "babel-eslint",
			// "ecmaVersion": "latest",
			ecmaVersion: 12,
			sourceType: 'module',
			allowImpotExportEverywhere: true, 
			ecmaFeatures:{
				module: true,
				legacyDecorators: true
			}
    },
    "plugins": [
        "vue"
    ],
    "rules": {
			'vue/no-unused-components':'off',
			'no-unused-vars':'off',
			"vue/multi-word-component-names": "off"
			// 'vue/multi-word-component-names': [
			// 	'error',
			// 	{
			// 		ignores: ['micro'], //需要忽略的组件名
			// 	},
			// ]
    }
}
