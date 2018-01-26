var calcFancy = {
	operations: {
		addition: {
			name: 'addition',
			arguments: 2,
			operation: function(a, b) {
				return a + b;
			}
		},
		subtraction: {
			name: 'subtraction',
			arguments: 2,
			operation: function(a, b) {
				return a - b;
			}
		}
	},
	addOperation: function(newOperation) {
		this.operations[newOperation.name] = newOperation;
	},
	removeOperation: function(opToRemove) {
		delete this.operations[opToRemove];
	},
	operate: function(opName, args) {
		return this.operations[opName](...args);
	}
}