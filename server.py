#!/usr/bin/env python3
"""Petit serveur local pour prévisualiser le portfolio.

Usage :  python3 server.py            (puis ouvrir http://127.0.0.1:4321)
         python3 server.py 8080       (pour choisir un autre port)

Astuce : tu peux aussi simplement double-cliquer sur index.html,
le site fonctionne aussi en ouverture directe (file://).
"""
import functools, http.server, os, socketserver, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
here = os.path.dirname(os.path.abspath(__file__))
os.chdir(here)  # sert le dossier du portfolio, où qu'il soit

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=here)


class Server(socketserver.TCPServer):
    allow_reuse_address = True


with Server(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Portfolio en ligne sur  http://127.0.0.1:{PORT}", flush=True)
    print("Ctrl+C pour arrêter.", flush=True)
    httpd.serve_forever()
