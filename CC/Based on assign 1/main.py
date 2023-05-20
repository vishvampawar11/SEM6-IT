import os
import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):

	# PROBLEM STATEMENT NO. 1
	# def get(self):
	#	self.response.write("Hello World")
	
	def get(self):
	
		# PROBLEM STATEMENT NO. 2, 3
		# template_values = {
		#    "name": "Vishvam Pawar",
		# 	 "seat_no": "T190058673",
		#	 "department": "IT",	
		# }
		
		
		# PROBLEM STATEMENT NO. 4, 5
		# number = 5
		# results = []
		# for i in range(10):
		# 	 results.append(number*(i+1))
		#
		# template_values = { "number": number, "results": results }
		
		
		# PROBLEM STATEMENT NO. 6
		# n = 8
		# fibonacci = [0, 1]
		
 		# for i in range(2, n):
 		#	 fibonacci.append(fibonacci[i-1] + fibonacci[i-2])
 			
 		# template_values = { "fibonacci": fibonacci }
		
		
		path = os.path.join(os.path.dirname(__file__), 'index.html')
		
		self.response.out.write(template.render(path, template_values))

app = webapp2.WSGIApplication(
	[("/", MainPage)],
	debug = True
)
