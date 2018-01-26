// PURPOSE: so users can have a flexible calculator
var calcFancy = {
	// PURPOSE: easy-access storage for the calc's functionalities
	operations: {
		// NITIALIZED: addition and subtraction objects
	},
	// PURPOSE: so users can add new operations to the calc
	addOperation: function(newOperation) {
		// BEHAVIOR: sets a new key/value pair in this.operations.  key = newOperation.name, value = newOperation
		return undefined;
	},
	// PURPOSE: so users can remove operations from the calc
	removeOperation: function(opToRemove) {
		// BEHAVIOR: deletes the operation with the key matching opToRemove
		return undefined
	},
	// PURPOSE: so users can use the calculator
	operate: function(opName) {
		var result = 0000;
		// BEHAVIOR: retrieves the correct operation, passes the arguments into the operation, and returns the result
		return result;
	}
}

// using the specs, reconstruct everything but the initial values and the logic needed to implement the method's behviors