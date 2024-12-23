class Element:
	def __init__(self,coord,size):
		self.x = coord[0]
		self.y = coord[1]
		self.value = None
		self.neighbours = []
		self.potential = []
		for i in range(1,size+1):
			self.potential.append(i)
		self.queued = 0
		return

	def printelem(self):
		print '(',self.x,',',self.y,')',
		return

	def getX(self):
		return self.x

	def getY(self):
		return self.y

	def addNeighbour(self,ne):
		self.neighbours.append(ne)
		return

	def getNeighbours(self):
		return self.neighbours

	def getValue(self):
		return self.value

	def setValue(self,v):
		self.value = v
		return

	def removePotential(self,v):
		if v in self.potential:
			self.potential.remove(v)
		return

	def getPotential(self):
		return self.potential

	def setQueued(self):
		self.queued = 1
		return

	def notQueued(self):
		if self.queued:
			return 0
		else:
			return 1

class Block:
	def __init__(self,size,*args):
		self.size = size
		self.elemcoords = args
		self.targets = []
		self.elems = []
		for i in range(1,size+1):
			self.targets.append([])
			self.elems.append(Element(self.elemcoords[i-1],size))
		for i in range(size):
			self.targets[i] = []
			for e in self.elems[:]:
				self.targets[i].append(e)
		return

	def append(self,elem):
		self.elems.append(elem)
		return

	def getTargets(self):
		return(self.targets)

	def printblock(self):
		print 'Block -',self.size,'-',
		for e in self.elems[:]:
			e.printelem()
		print ' '
		return

	def getSize(self):
		return(self.size)

	def getElements(self):
		return(self.elems)

	def removeTarget(self,e):
		#print e.getX(),e.getY()
		#print self.targets
		for t in self.targets[:]:
			#print t.index(e)
			if e in t:
				#print 'true'
				i = t.index(e)
				del t[i]
		#print self.targets
		return

	def emptyTargetValue(self,v):
		self.targets[v-1] = []		
		return

	def removeTargetValue(self,e,v):
		# if target value outside block size if will not have targets to start with for that value
		if v > self.size:
			return
		#print 'removetargetvalue',e.getX(),e.getY(),v
		pot = self.targets[v-1]
		if e in pot:
			i = pot.index(e)
			del pot[i]

class Tectonic:
	def __init__(self,columns,rows):
		self.blocks = []
		self.total = 0
		self.columns = columns
		self.rows = rows
		self.rosterBlock = [[Block(1,[0,0]) for j in range (1,rows+1)] for i in range(1,columns+1)]
		self.rosterElement = [[Element([0,0],0) for j in range (1,rows+1)] for i in range(1,columns+1)]
		return

	def append(self,block):
		self.blocks.append(block)
		self.total = self.total + block.getSize() 
		return

	def printall(self):
		print 'Total : ',self.total
		for b in self.blocks[:]:
			b.printblock()
		return

	def check(self):
		roster = []
		for i in range(1,self.columns+1):
			roster.append([])
			roster[i-1] = []
			for j in range(1,self.rows+1):
				roster[i-1].append(0)
		print roster
		for b in self.blocks[:]:
			el = b.getElements()
			for e in el[:]:
				x = e.getX()
				y = e.getY()
				print x,y
				roster[x-1][y-1] = 1
		error = 0 
		for i in range(1,self.columns+1):
			for j in range(1,self.rows+1):
				if roster[i-1][j-1] == 0:
					error = 1
					print 'element',i,j,'missing'
					break
			if error:
				break
		else:
			print 'roster OK'
			# initialize rosterBlock and rosterElement
			for b in self.blocks[:]:
				el = b.getElements()
				for e in el[:]:
					x = e.getX()
					y = e.getY()
					self.rosterBlock[x-1][y-1] = b
					self.rosterElement[x-1][y-1] = e
#			print self.rosterBlock
#			print self.rosterElement
			return 0
		return error

	def setNeighbours(self):
		deltas = [[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]]
		for x in range(self.columns):
			for y in range(self.rows):
				for d in deltas[:]:
					nx = (x+1)+d[0]
					ny = (y+1)+d[1]
					if nx >= 1 and nx <= self.columns and ny >= 1 and ny <= self.rows:
						#print x+1,y+1,nx,ny
						if self.rosterBlock[x][y] <> self.rosterBlock[nx-1][ny-1]:
							#print x+1,y+1,nx,ny
							self.rosterElement[x][y].addNeighbour(self.rosterElement[nx-1][ny-1])
		return

	def printNeighbour(self,x,y):
		e = self.rosterElement[x-1][y-1]
		ne = e.getNeighbours()
		print 'Neighbours for ',x,y
		for pe in ne[:]:
			print '---',pe.getX(),pe.getY()
		return

	def printRoster(self):
		print '-------------------------------------------------------------------------------'
		for y in range(self.rows):
			for x in range(self.columns):
				v = self.rosterElement[x][y].getValue()
				if v is None:
					print self.rosterElement[x][y].getPotential(),
				else:
					print v,
			print ' '
		return

	def fillValue(self,x,y,v):
		print 'Filling',x,y,'with',v
		ve = self.rosterElement[x-1][y-1]
		ve.setValue(v)
		ve.setQueued()
		# remove the set value from potential value list of all other elements of same block
		be = self.rosterBlock[x-1][y-1].getElements()
		for e in be[:]:
			if e <> ve:
				#print 'potential',v,'removed'
				e.removePotential(v)
		# remove element from target list of all values of block
		self.rosterBlock[x-1][y-1].removeTarget(self.rosterElement[x-1][y-1])
		# clear target list of the set value of the block
		self.rosterBlock[x-1][y-1].emptyTargetValue(v)
		# remove the set value of potential value list of all neighbours
		ne = ve.getNeighbours()
		for e in ne[:]:
			e.removePotential(v)
		# and remove the neighbour elements from the target list of their block for that value
		for e in ne[:]:
			nx = e.getX()
			ny = e.getY()
			nb = self.rosterBlock[nx-1][ny-1]
			nb.removeTargetValue(e,v)
		return

	def checkNeighbours(self):
		# when do we have to do this ?
		# remove potential values of intersect of potential values of neighbours of same block that do not appear as potential of other elements of that neighbour block (in other words that uniquely appear as potential value for all neightbours of same block)
		# stupidly we do it for all elements and all neighbours because we didn't keep track of a list of neighbour blocks to optimize this step
		for x in range(1,self.columns+1):
			for y in range(1,self.rows+1):
				if not self.rosterElement[x-1][y-1].notQueued():
					continue
				ne = self.rosterElement[x-1][y-1].getNeighbours()
				# pick a neighbour
				for n in ne[:]:
					if not n.notQueued():
						continue
					commonV = n.getPotential()
					# determine block via rosterBlock
					nx = n.getX()
					ny = n.getY()
					nB = self.rosterBlock[nx-1][ny-1]
					# collect other neighbours of same block (via rosterBlock or via running over neighbours)
					for on in ne[:]:
						if on <> n: # it's a different neighbour
							onB = self.rosterBlock[on.getX()-1][on.getY()-1]
							if onB == nB and on.notQueued(): # from same block and without finale value yet
								# determine cross section of potential values of neighbours of that block
								commonV = list(set(commonV)|set(on.getPotential()))
					# reduce further with values that still appear as value of other elements of neighbour block
					eB = nB.getElements()
					for be in eB[:]:
						if be not in ne and be.notQueued(): # it's not a neighbour and has not yet final value set
							commonV = list(set(commonV)-set(be.getPotential()))
					# reduce final list from potential list of element at hand
					for p in commonV[:]:
						print 'Reduction',x,y,'with',n.getX(),n.getY(),'value',p
						self.rosterElement[x-1][y-1].removePotential(p)
						self.rosterBlock[x-1][y-1].removeTargetValue(n,p)
		return

	def checkNewValues(self):
		# targets with only 1 candidate ?
		for b in self.blocks[:]:
			targets = b.getTargets()
			for t in range(b.getSize()):
				if len(targets[t]) == 1:
					el = targets[t][0]
					if el.notQueued():
						print 'AAA new value at',el.getX(),el.getY(),'value',t+1
						self.vq.append([el.getX(),el.getY(),t+1])
						el.setQueued()
		# elements with only 1 potential ?
			elems = b.getElements()
			for el in elems[:]:
				pot = el.getPotential()
				if len(pot) == 1:
					if el.notQueued():
						v = pot[0]
						print 'BBB new value at',el.getX(),el.getY(),'value',v
						self.vq.append([el.getX(),el.getY(),v])
						el.setQueued()
		return

	def solve(self,valueq):
		self.vq = valueq ;
		self.checkNeighbours()
		self.checkNewValues()
		while len(self.vq) > 0:
			print self.vq
			x = self.vq[0][0]
			y = self.vq[0][1]
			v = self.vq[0][2]
			del self.vq[0]
			self.fillValue(x,y,v)
			self.checkNewValues()	
			if len(self.vq) == 0:
				self.checkNeighbours()
				self.checkNewValues()		
		return


t = Tectonic(8,8)
t.append(Block(4,[1,1],[2,1],[3,1],[4,1]))
t.append(Block(4,[5,1],[6,1],[4,2],[5,2]))
t.append(Block(4,[7,1],[8,1],[6,2],[7,2]))
t.append(Block(5,[1,2],[2,2],[3,2],[1,3],[2,3]))
t.append(Block(2,[8,2],[8,3]))
t.append(Block(5,[3,3],[4,3],[4,4],[5,4],[6,4]))
t.append(Block(5,[5,3],[6,3],[7,3],[7,4],[8,4]))
t.append(Block(5,[1,4],[1,5],[2,5],[1,6],[2,6]))
t.append(Block(5,[2,4],[3,4],[3,5],[4,5],[3,6]))
t.append(Block(5,[5,5],[6,5],[7,5],[4,6],[5,6]))
t.append(Block(5,[8,5],[6,6],[7,6],[8,6],[8,7]))
t.append(Block(5,[1,7],[2,7],[1,8],[2,8],[3,8]))
t.append(Block(5,[3,7],[4,7],[5,7],[4,8],[5,8]))
t.append(Block(5,[6,7],[7,7],[6,8],[7,8],[8,8]))
t.printall()
if t.check():
	exit()
t.setNeighbours()
t.printRoster()
#valueq = [[5,1,4],[3,7,4],[1,7,1],[1,1,3],[8,3,5],[1,4,4],[4,4,4],[6,4,5],[4,6,1],[7,6,3],[8,7,1],[5,8,5],[7,8,4]]
#valueq = [[2,1,2],[4,1,4],[8,1,4],[6,2,2],[2,3,3],[1,4,1],[3,4,2],[4,5,4],[6,5,1],[1,7,1],[7,7,3],[4,8,3],[8,8,5]]
#valueq = [[2,1,5],[4,1,1],[3,2,4],[6,2,4],[1,3,3],[2,4,1],[6,4,4],[1,5,4],[1,7,2],[3,7,1],[1,9,5],[5,9,3],[1,10,4],[6,11,3]]
#valueq = [[7,1,1],[1,2,2],[4,2,4],[6,2,4],[8,2,3],[2,4,4],[6,4,2],[5,6,4],[1,7,3],[8,7,2],[2,8,5],[4,8,1],[7,8,4]]
valueq = [[1,1,1],[7,1,4],[2,3,3],[4,3,2],[7,4,1],[3,5,4],[6,5,2],[1,6,3],[4,6,1],[7,6,4],[5,7,4],[2,8,1],[8,8,4]]
t.solve(valueq)
t.printRoster()
