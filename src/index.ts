// @ts-nocheck

function CallableInstance(property)
{
	// @ts-ignore
	const self = this;
	// @ts-ignore
	const func = this.constructor.prototype[property];
	const apply = function ()
	{
		return func.apply(apply, arguments);
	};
	// @ts-ignore
	Object.setPrototypeOf(apply, this.constructor.prototype);
	Object.getOwnPropertyNames(func)
		.forEach(function (p)
		{
			Object.defineProperty(apply, p, Object.getOwnPropertyDescriptor(func, p));
		})
	;
	return apply;
}

CallableInstance.prototype = Object.create(Function.prototype);

export { CallableInstance };
export default CallableInstance;

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(CallableInstance, "__esModule", { value: true });

	Object.defineProperty(CallableInstance, 'CallableInstance', { value: CallableInstance });
	Object.defineProperty(CallableInstance, 'default', { value: CallableInstance });


}

//module.exports = Object.freeze(module.exports);
