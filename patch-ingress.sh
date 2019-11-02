kubectl patch ing/hw-ingress --type=json \
-p='[{"op": "replace", "path": "/spec/rules/0/host", "value":"hello.aks.cape.sh"}]'


