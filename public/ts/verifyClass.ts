class verifierHandler {
	private verifier: Verifier;

	public setVerifier(verifier: Verifier) {
		this.Verifier = verifier;
	}
	public verify(format, str) {
		return this.verifier.verify();
	}
}

interface Verifier {
	verify: () => boolean;
}

class VerifyFormat {
	verify(format, str) {
		return format.test(str);
	}
}