[![Build Status](http://drone.lab.rsc7.id/api/badges/debianmaster/helloworldapp/status.svg)](http://drone.lab.rsc7.id/debianmaster/helloworldapp)


## Stateless app demo
```sh
k create ns demo
k apply -f k8s.yaml -n demo
k get ing -n demo
```

> Note: you can use `patch-ingress.sh` . file to patch ingress to a desired dns addr

## Stateful app demo
> Make sure you have dynamic storage provider configured first
```sh
k get sc
```
> if you do not see any default storage class / storage provider use following script to create one based on nfs
```sh
k apply -f https://raw.githubusercontent.com/debianmaster/k8s-examples/master/nfs/nfs.yaml
k get sc
```
> you should now see a default storage class configured for k8s

### demo application
```sh
k apply -f persistent/k8s.yaml -n demo
k get pvc -n demo
k get ing -n demo  # access this url
k get po -n demo -l run=helloworld # get podname
k -n demo cp images <your_pod_name>:/usr/share/nginx/html/ 
# access url again
```
