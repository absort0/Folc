<?php

namespace MediaWiki\Skins\Folc;

use MediaWiki\MediaWikiServices;
use SkinMustache;
use SkinTemplate;

class Folc extends SkinMustache {
    
    /**
     * Extends the getTemplateData function to add a template key 'html-myskin-hello-world'
     * which can be rendered in skin.mustache using {{{html-myskin-hello-world}}}
     */
    public function getTemplateData() {
        global $wgTitle;

        $data = parent::getTemplateData();
        $data['pagetitle'] = $wgTitle->getFullText(); // or $this->msg('msg-key')->parse();
        $data['pagetitle_smallcase'] = strtolower( $wgTitle->getFullText() );
        if ( in_array( $wgTitle->getFullText(), ['Dance', 'Art', 'Belief','Craftsmanship and Practices', 'Entertainment and Recreation', 'Food', 'Music', 'Ritual', 'Verbal Arts and Literature' ] ) ) {
            $data['category_page'] = true;
        } else if ( !$wgTitle->isMainPage() && $wgTitle->getNamespace() == 0 ) {
            $cargo_table_name = CargoUtils::getTableNameForTemplate( 'PostForm' );

            $lb = MediaWikiServices::getInstance()->getDBLoadBalancer();
            $dbr = $lb->getConnectionRef( DB_REPLICA );
            $res = $dbr->newSelectQueryBuilder()
                ->select( '*' )
                ->from( $cargo_table_name )
                ->where( [ '_pageID' => $wgTitle->getId() ] )
                ->caller( __METHOD__ )
                ->fetchResultSet();


            foreach( $res as $row ) {
                dieq( $row );
            }
        }
        return $data;
    }
}