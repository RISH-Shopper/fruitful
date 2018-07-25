# Code Review I

## Workflow

	- READ.ME
		- Name of project
		- Instructions for running locally
		- Link to deployed version
	- Tickets
		- Specific, small module of work
		- Incorporate nature of work needed (bug fix, new feature, test, etc)
		- Fold them in by user story
	- Commits
		- Semantic commits have 3 parts
			- Nature of commit (fix, feature, docs, style, etc)
			- Area of commit coverage (models, routes, react, auth)
			- Present tense description of commit
			(removed npm-merge to succesfully deploy on heroku)

## Routes

	- Can we leverage router.params for increased eager loading?
	- No Conventional HTTP Stati = GET 200, POST = 201, DELETE = 204, PUT = 202 or 204 if successful but no changes


## Models
	
	- Nice job avoiding Sequelize.ARRAY! (Why?)
	- 2-way belongsToMany ONLY for join tables, otherwise leverage has methods to generate getters and setters without provisioning extra db space
	- Take a SEAT (Stop Everything and Test)
	- Cart is property of Order model
	










## Models