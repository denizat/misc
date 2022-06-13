import enchant
# import pos

d = enchant.Dict("en_US")



excluded = "adiubogysc"
known ="---e-"

# always start with crane
# https://www.devangthakkar.com/wordle_archive/?145
# to improve this, for the intermediate guesses,
# i should use another character instead of a known character since
# we already know the position of that charcter
# this would give us the opportunity to eliminate another character

# must have but not in
# notin = [['n',3]]
notin = [['r',2]]

alpha = "abcdefghijklmnopqrstuvwxyz"
for c in excluded + ''.join([i for i in known if i != '-']):
    alpha = alpha.replace(c,'')

# possible words
pw = []
# place is place in word the character we are trying to find it
# alrud is already used characters
def solver(place = 0,alrud = '', intermediate=False):

    global pw

    # we in not in string
    wes = ''
    for i in notin:
        for j in i[1:]:
            if place == j:
                wes += i[0]
                continue
    l = alpha
    for c in wes:
        l = l.replace(c,'')
    if intermediate:
        for c in alrud:
            l = l.replace(c,'')

    if known[place] != '-':
        w = alrud+known[place]
        if place == 4:
            for i in notin:
                if i[0] not in w: return
            if d.check(w): pw += [w]; print(w)
            # if w in pos.p: pw += [w]; print(w)
        else:
            if intermediate:
                l = l.replace(known[place],'')
                for c in l:
                        solver(place+1,alrud+c,intermediate)
            else:
                solver(place + 1, w,intermediate)
        return

    if place == 4 :
        for c in l:
            bk = False
            w = alrud + c
            for i in notin:
                if i[0] not in w:
                    bk = True
                    break
            if bk:
                continue

            if d.check(w):
            # if w in pos.p:
                pw += [w]
                print(w)
    else:
        for c in l:
            solver(place+1,alrud+c,intermediate)

solver(intermediate=False)
print("length:",len(pw))

# word with most overlap
def wwmo():
    # new algo
    # I think this is better and it has done better on tests
    lg = 0
    sw = ''
    for w in pw:
        ls = [i for i in pw]
        n = 0
        for c in ls:
            for a,b in zip(w,c):
                if a == b: ls.remove(c); n += 1; break
        if n > lg: lg = n; sw = w
    print(sw)

def wwmoo():
    # old algo
    lg = 0
    sw = ''
    for w in pw:
        n = 0
        for i in pw:
            if w[0] == i[0]: n += 1
        if n > lg: lg = n; sw = w
    print(sw)

wwmo()
wwmoo()
