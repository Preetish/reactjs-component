var Demo = React.createClass({
	render: function () {
		return (

			<div className="container">
				<h1>React.js Expertise Demo</h1>
				
				<form>
					<p className="h3">Select your expertise:</p>

					<p className="radio">
						<label>
							<input type="radio" name="expertise" value="angular"/>
							Angular.js
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="expertise" value="react"/>
							React.js
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="expertise" value="ember"/>
							Ember.js
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="expertise" value="aurelia"/>
							Aurelia.js
						</label>
					</p>
					<p className="radio">
						<label>
							<input type="radio" name="expertise" value="meteor"/>
							Meteor.js
						</label>
					</p>
					<p className="form-group radio">
						<label>
							<input type="radio" name="expertise" value="other"/>
							Other
						</label>
						<label className="form-inline">
							Please specify:
							<input type="text" name="referrer_other"/>
						</label>
					</p>

					<p><input type="submit"/></p>
				</form>
			</div>

		);
	}
});