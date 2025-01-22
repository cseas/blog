```sh
getpods() {
	OUTPUT+="$(kubectl get pods -n dashboard | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n frontend-graphql | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n sme-dashboard | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n api | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n ufh | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n pgos | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n onboarding | grep ${1:-abhijeet})\n";
	OUTPUT+="$(kubectl get pods -n asv | grep ${1:-abhijeet})\n";
	echo ${OUTPUT} | column -t;
}

watchpods() {
	watch "zsh -c 'source ~/.zshrc; getpods ${1:-abhijeet}'"
}
```
