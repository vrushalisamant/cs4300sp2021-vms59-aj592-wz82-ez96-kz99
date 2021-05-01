from . import *  
from app.irsystem.models.helpers import *
from app.irsystem.controllers.search import *
from app.irsystem.models.helpers import NumpyEncoder as NumpyEncoder



# @irsystem.route('/search', methods=['GET'])
# def search():
# 	tags = request.args.getlist("tags")
# 	if (len(tags)==0):
# 		tags.append(request.args.get("tags"))
# 	print(tags)
# 	return get_category_matches(tags)

@irsystem.route('/search', methods=['GET'])
def search_text():
	query = request.args.get("text")
	if (query is None):
		return ""
	print(query)
	tags = request.args.getlist("tags")
	if (len(tags)==0):
  		return get_lsi_sim(query)
		# tags.append(request.args.get("tags"))
	print(tags)
	return get_lsi_sim(query, tags)


