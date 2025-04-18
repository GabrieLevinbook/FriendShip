from django.http import JsonResponse
import json
import os
from django.views.decorators.csrf import csrf_exempt
from .AnaliseIA import MachineLearing
import pandas as pd
from .Avaliar import Avaliar
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_FILE = os.path.join(BASE_DIR, 'data.json')
@csrf_exempt
def add_perfil(request):
    if request.method == "POST":
        try:
            data_old={}
            with open(DATA_FILE,"r") as r:
                data_old = json.load(r)
            index_toadd = int(list(data_old.keys())[-1])+1
            data_toadd = json.loads(request.body)
            for i in data_old:
                if data_old[i]["Nome"] == data_toadd["Nome"]:
                    return JsonResponse({"status": "erro", "msg": "Nome ja esta sendo utilizado"}, status=500)

            data_old[index_toadd]=data_toadd
            with open(DATA_FILE, 'w') as f:
                json.dump(data_old, f, indent=2, ensure_ascii=False)
            nome = data_toadd["Nome"]
            grupos = MachineLearing()

            grupoEscolhido = grupos[grupos["Nome"] == nome]["Grupo"].values[0]  

            mesmo_grupo = grupos[(grupos["Grupo"] == grupoEscolhido) & (grupos["Nome"] != nome)]
            linha = grupos[(grupos["Grupo"] == grupoEscolhido) & (grupos["Nome"] == nome)].head(1)
            similaridade= Avaliar(mesmo_grupo,linha)
            mesmo_grupo["Similaridade"] = similaridade
            sugestoes = mesmo_grupo.sample(n=min(3, len(mesmo_grupo)))[["Genero", "Nome", "Areas", "Descricao","Similaridade"]]
            
            return JsonResponse({"status": "ok", "msg": "Dados atualizados","Dados":sugestoes.to_json()})
        except Exception as e:
            return JsonResponse({"status": "erro", "msg": str(e)}, status=500)

    