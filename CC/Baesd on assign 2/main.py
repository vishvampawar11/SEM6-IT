import os
import json
import urllib
import webapp2
from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
	def get(self):
		template_values = {}
		path = os.path.join(os.path.dirname(__file__), 'templates/index.html')
		
		self.response.out.write(template.render(path, template_values))
		
	"""
	PROBLEM STATEMENT NO. 7
		def post(self):
			pincode = self.request.get("pincode")
			url = "https://api.postalpincode.in/pincode/" + pincode
			data = urllib.urlopen(url).read()
			data = json.loads(data)
		
			if data[0]["Status"] == "Error":
				path = os.path.join(os.path.dirname(__file__), 'templates/error.html')
				self.response.out.write(template.render(path, {}))
				
			
			post_offices = data[0]["PostOffice"]
		
		
			template_values = {
				"post_offices": post_offices,
			}
			
			path = os.path.join(os.path.dirname(__file__), 'templates/result.html')
			
			self.response.out.write(template.render(path, template_values))
	"""
	
	def post(self):
		lat = self.request.get("lat")
		lng = self.request.get("lng")
		
		url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lng + "&current_weather=true"
		
		data = urllib.urlopen(url).read()
		data = json.loads(data)
		
		#if data["error"]:
		#	path = os.path.join(os.path.dirname(__file__), 'templates/error.html')
		#	self.response.out.write(template.render(path, {}))
			
		print(data)
			
		current_weather = data["current_weather"]
		
		template_values = { "current_weather": current_weather }
		
		path = os.path.join(os.path.dirname(__file__), 'templates/result.html')
		
		self.response.out.write(template.render(path, template_values))

		
app = webapp2.WSGIApplication([('/', MainPage)], debug=True)
		
