from . import *  
from app.irsystem.models.helpers import *
from app.irsystem.controllers.search import *
from app.irsystem.models.helpers import NumpyEncoder as NumpyEncoder



@irsystem.route('/search', methods=['GET'])
def search():
	tags = request.args.getlist("tags")
	print(tags)
	return get_category_matches(tags)




