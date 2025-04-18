from sklearn.cluster import KMeans
from sklearn.preprocessing import MultiLabelBinarizer
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt 
import os
from io import StringIO
"""Importa as funções e bibliotecas que serão utilizadas no código"""

def MachineLearing():
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    caminho_arquivo = os.path.join(BASE_DIR, 'data.json')
    df = pd.read_json(caminho_arquivo)

    areas_por_pessoa =[]
    Nome = []
    Genero = []
    descricao = []
    """Abre o arquivo json e transforma ele em um dataframe cria um array para cada característica do usuário"""
    for i in df:
        areas_por_pessoa.append(df[i]["Areas"])
        Nome.append(df[i]["Nome"])
        Genero.append(df[i]["Genero"])
        descricao.append(df[i]["Descricao"])
    df2 = pd.DataFrame({
            "Nome":Nome,
        "Areas":areas_por_pessoa,
        "Descricao":descricao,
        "Genero":Genero
    })
    """Adiciona os dados do dataframe em arrays para criar um novo dataframe com valores com valores mais organizados"""
    mlb=MultiLabelBinarizer()
    areas_encoded = mlb.fit_transform(df2["Areas"])

    df_encoded = pd.DataFrame(areas_encoded, columns=mlb.classes_, index=df2.index)

    kmeans = KMeans(n_clusters=12, random_state=42)
    df_encoded['Grupo'] = kmeans.fit_predict(df_encoded)
    df_resultado = df2.join(df_encoded)

    return   df_resultado.sort_values(by='Grupo')
    """Primeiro o código transforma as áreas em matriz binárias de 0 e 1 após isso aplica o modelo de
      aprendizado de máquina k-means para achar padrões e agrupar usuários baseado em suas semelhanças, juntando tanto as matriz binaria, 
      grupo e informações do df2 em um único array que é retornado"""