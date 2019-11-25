import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, Validator, FormGroup, ValidationErrors } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Directive({
    selector:'[mustMatch]',
    providers: [{
        provide:NG_VALIDATORS,
        useExisting: MustMatchDirective,
        multi : true
    }]
})

export class MustMatchDirective implements Validator{
    @Input('mustMatch')  mustMatch : string[] = [];
    validate(formgroup : FormGroup) : ValidationErrors {
        return MustMatch(this.mustMatch[0],this.mustMatch[1])(formgroup);
    }
}